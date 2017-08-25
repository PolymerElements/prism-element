import { Base } from '../polymer/polymer.js';
import '../../prismjs/prism.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';

var HIGHLIGHT_EVENT = 'syntax-highlight';

Polymer({

  is: 'prism-highlighter',

  properties: {
    /**
     * Adds languages outside of the core Prism languages.
     *
     * Prism includes a few languages in the core library:
     *   - JavaScript
     *   - Markup
     *   - CSS
     *   - C-Like
     * Use this property to extend the core set with other Prism
     * components and custom languages.
     *
     * Example:
     *   ```
     *   <!-- with languages = {'custom': myCustomPrismLang}; -->
     *   <!-- or languages = Prism.languages; -->
     *   <prism-highlighter languages="[[languages]]"></prism-highlighter>
     *   ```
     *
     * @attribute languages
     * @type {!Object}
     */
    languages: {
      type: Object,
      value: function() {
        return {};
      }
    }
  },

  ready: function() {
    this._handler = this._highlight.bind(this);
  },

  attached: function() {
    (this.parentNode.host || this.parentElement).addEventListener(HIGHLIGHT_EVENT, this._handler);
  },

  detached: function() {
    (this.parentNode.host || this.parentElement).removeEventListener(HIGHLIGHT_EVENT, this._handler);
  },

  /**
   * Handle the highlighting event, if we can.
   *
   * @param {!CustomEvent} event
   */
  _highlight: function(event) {
    if (!event.detail || !event.detail.code) {
      Base._warn('Malformed', HIGHLIGHT_EVENT, 'event:', event.detail);
      return;
    }

    event.stopPropagation();

    var detail = event.detail;
    detail.code = Prism.highlight(detail.code, this._detectLang(detail.code, detail.lang));
  },

  /**
   * Picks a Prism formatter based on the `lang` hint and `code`.
   *
   * @param {string} code The source being highlighted.
   * @param {string=} lang A language hint (e.g. ````LANG`).
   * @return {!Prism.Lang}
   */
  _detectLang: function(code, lang) {
    if (!lang) {
      // Stupid simple detection if we have no lang, courtesy of:
      // https://github.com/robdodson/mark-down/blob/ac2eaa/mark-down.html#L93-101
      return code.match(/^\s*</) ? Prism.languages.markup : Prism.languages.javascript;
    }

    if (this.languages[lang]) {
      return this.languages[lang];
    } else if (Prism.languages[lang]) {
      return Prism.languages[lang];
    }
    switch (lang.substr(0, 2)) {
      case 'js':
      case 'es':
        return Prism.languages.javascript;
      case 'c':
        return Prism.languages.clike;
      default:
        // The assumption is that you're mostly documenting HTML when in HTML.
        return Prism.languages.markup;
    }
  },

});
