import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

import { FaHttpService } from "../fa-http.service";

@Component({
  selector: 'app-fa-list',
  templateUrl: './fa-list.component.html',
  styleUrls: ['./fa-list.component.css']
})
export class FaListComponent implements OnInit {

  datas;
  results;
  tokenizer;
  clipboard;
  isLoaded: boolean = false;
  input;
  searchInput = new FormControl();

  constructor(private faHttpService: FaHttpService) {

    // Load and prepare tokenizer
    window['kuromoji'].builder({ dicPath: '/font-awesome-ja/dict/' }).build((error, _tokenizer) => {
      if (error != null) {
        console.log(error);
      }
      this.tokenizer = _tokenizer;
      this.isLoaded = true;
      setTimeout(() => {
        this.input = document.getElementById('search-text');
        this.input.focus();
      }, 300);

      //vm.message = "Ready";
      //
      //vm.inputText = "すもももももももものうち";
      //vm.isLoading = false;
    });

    // clipboard
    this.clipboard = new window['Clipboard']('.copy', {
      text: (trigger) => {
        // TODO: option
        return `<i class="fa ${trigger.getAttribute('data-name')}"></i>`;
      }
    });
    this.clipboard.on('success', function(e) {
      //console.info('Action:', e.action);
      //console.info('Text:', e.text);
      //console.info('Trigger:', e.trigger);

      //e.clearSelection();
      e.trigger.innerHTML = 'clip!';

      setTimeout(() => {
        e.trigger.innerHTML = 'copy';
      }, 1000);
    });

    //console.log(this.searchInput.valueChanges);
    this.searchInput.valueChanges
      .debounceTime(150)
      .subscribe(text => {
        //console.log(text);
        if (text === '') {
          this.results = this.datas;
        } else {
          this.search(this.tokenizer.tokenize(text));
        }
      });

  }

  ngOnInit() {

    this.faHttpService.getData()
      .then(data => {
        this.datas = data;
        this.results = data;
      });

  }

  submit() {
    if (this.input.value === '') return;
    this.search(this.tokenizer.tokenize(this.input.value));
  }

  search(tokenized) {

    //console.log(tokenized, this.datas);

    let filtered = this.datas.filter((data, i) => {
      let isMatch = false;

      tokenized.some((token:any) => {
        if (~data.name.indexOf(token.surface_form) ||
          ~data.keywords.indexOf(token.surface_form) ||
          (token.reading && ~data.keywords.indexOf(token.reading))) {
          isMatch = true;
          return false;
        }
      });

      if (isMatch) return data;

    });

    //console.log(tokenized, filtered);
    this.results = filtered;
  }

}
