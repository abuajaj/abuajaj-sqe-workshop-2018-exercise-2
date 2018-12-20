/* eslint-disable complexity */
import $ from 'jquery';
import Substitution from './substitution';

$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {

        let codeToParse = $('#codePlaceholder').val();
        let codeInput   = $('#codeInput').val();

        let substitution = new Substitution(codeToParse, codeInput ? codeInput.split(',') : []);
        substitution.build();
        $('#result').html(substitution.render());
    });
});
