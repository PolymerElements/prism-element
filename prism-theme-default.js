/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/lib/elements/dom-module.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

const template = html`
<dom-module id="prism-theme-default">
  <template>
    <style>
    /**
    * prism.js default theme for JavaScript, CSS and HTML
    * Based on dabblet (http://dabblet.com)
    * @author Lea Verou
    */
    code[class*="language-"],
    pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    }

    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
    }

    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
    }

    @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
    }

    /* Code blocks */
    pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
    background: #f5f2f0;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
    color: slategray;
    }

    .token.punctuation {
    color: #999;
    }

    .namespace {
    opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
    color: #905;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
    color: #690;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
    color: #a67f59;
    background: hsla(0, 0%, 100%, .5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
    color: #07a;
    }

    .token.function {
    color: #DD4A68;
    }

    .token.regex,
    .token.important,
    .token.variable {
    color: #e90;
    }

    .token.important,
    .token.bold {
    font-weight: bold;
    }
    .token.italic {
    font-style: italic;
    }

    .token.entity {
    cursor: help;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild(template.content);