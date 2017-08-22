import '../../polymer/polymer.js';
import '../prism-highlighter.js';
import '../prism-theme-default.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style include="prism-theme-default">
      pre {
        padding: 0;
        margin: 0;
      }
    </style>

    <prism-highlighter></prism-highlighter>
    <pre id="output"></pre>
`,

  is: 'prism-demo',

  properties: {
    code: {
      type: String,
      observer: '_render'
    },

    lang: {
      type: String
    }
  },

  attached: function() {
    this._render();
  },

  _render: function() {
    this.$.output.innerHTML = this.highlight(this.code, this.lang);
  },

  highlight: function(code, lang) {
    return this.fire('syntax-highlight', {code: code, lang: lang}).detail.code;
  }
});
