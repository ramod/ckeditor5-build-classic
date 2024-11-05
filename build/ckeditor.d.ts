/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';
import { Comments } from '@ckeditor/ckeditor5-comments';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof Essentials | typeof Autoformat | typeof Bold | typeof Italic | typeof BlockQuote | typeof Heading | typeof Indent | typeof Link | typeof List | typeof Paragraph | typeof PasteFromOffice | typeof Table | typeof TableToolbar | typeof TextTransformation | typeof Alignment | typeof FontFamily | typeof FontSize | typeof Highlight | typeof RemoveFormat | typeof Strikethrough | typeof Underline | typeof TrackChanges | typeof Comments | typeof IndentBlock | typeof WordCount)[];
    static defaultConfig: {
        toolbar: {
            viewportTopOffset: number;
            items: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
