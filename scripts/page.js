//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

    var listLeft4;
    var listLeftHtml4;
    var listRight4;
    var orderLeft4;
    var orderRight4;

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft4 = new CreateListLeft4();
    listLeftHtml4 = new CreateListLeftHtml4();
    listRight4 = new CreateListRight4();
    orderLeft4 = new ShuffleMatchingOrder(listLeft4.length);
    orderRight4 = new ShuffleMatchingOrder(listRight4.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft4, listLeftHtml4, listRight4, orderLeft4, orderRight4, "idDD4", textSelect, hideLeftDropdown);
    $('#matching4').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft4);
    var maxRightSize = GetMaxSizeRightColumn(listRight4);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft4, "idDD4", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft4, "idDD4", hideLeftDropdown);


});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 0;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('ad8tPUB7nn8=', 840, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Generative phonology is a generally accepted position on the degrees of stress.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('XIxa2H0PzF8=', 840, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Is there any generally acceptable position in the degrees of stress in the first place?";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('Q9xklVHxero=', 599, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Generative phonology recognises how many levels of stress?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Q9xklVHxero=', 601, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "4";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('5HjMQUT8+mk=', 603, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "5";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('0cFjE1UuG74=', 964, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "3";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('p+7MNePnTrI=', 966, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "2";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('vMbkmv8TiKk=', 522, 0, 99999);
    var numOfAnswers = 5;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Name them in order of magnitude:  1. __________ 2. __________ 3. __________ 4. __________ 5. __________";
    choice = $('#idGap3_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('G1/wp5ZvOptHFX6Z'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4iTOOMG9lRUUHA/x'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('smHo9oI1qeY='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    choice = $('#idGap3_3').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lmt9YNRIBthkJsGy'));
    var answer3 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer3);
    choice = $('#idGap3_4').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QYI2oVmxWjY='));
    var answer4 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('eIaBno3AI3g=', 727, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "The strongest degree of a stressed syllable; i.e. the most prominent is a ___________.";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('uI3Q6DrKGQ6Rz4mebrb4Ow=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 4;
    var weight = DecodeNumber('hw2h2e/MfZY=', 96, 0, 99999);
    var numOfAnswers = 2;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Match both strokes.";
    question.noChoice = false;
    for (i = 0; i < orderLeft4.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD4", i);
        choice[1] = GetSelextedItemRight("idDD4", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft4.length; j++)
        {
            if (listLeft4[j] === choice[0])
            {
                valuation.push(listRight4[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 5;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('OGGZJZBnn+E=', 943, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Primary stress is not phonetically marked by an increase in respiratory system.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('hQiX+ewUI8c=', 943, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Remember that we talk more of prominence in stressed syllables.";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 6;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('ZDZ0F195X5Y=', 311, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Primarily stressed syllables involves an alternation in pitch.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('ZDZ0F195X5Y=', 311, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Remember there is loudness and length. Are you sure of your answer?";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('nika1kcjHKY=', 321, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Select the primary stressed syllable.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('nika1kcjHKY=', 323, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "administraTIVE";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LBHJbVA+3nc=', 162, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "ADministration";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('S6M1Zzk4Am8=', 164, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "adMINistration";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('S6M1Zzk4Am8=', 166, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "admiNIStrative";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('+11cJA/Vx/E=', 527, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Select the primary stressed syllable.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('+11cJA/Vx/E=', 529, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "faCULty";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('i8BCD45xCKw=', 531, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "FAculty";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('WbVqrArtmV0=', 891, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "faculTY";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('KWNU5+orKqY=', 895, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Select the primarily stressed syllable.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('4guf9Tq+yjw=', 897, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "seMESter";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fal+4h+VDC8=', 736, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "semesTER";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('pKCaU2T5FHY=', 738, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "SEmester";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('V9d0xkELb24=', 1101, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Select the primarily stressed syllable.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('V9d0xkELb24=', 1103, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "classROOM";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('4SmRXUHkySw=', 1105, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "CLASSroom";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('wdrEwikz3f4=', 469, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is stronger than unmarked syllables but weaker than primarily stressed syllables?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('wdrEwikz3f4=', 471, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Quaternary stress";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('uh3wo7hEunM=', 310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Secondary stress";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uh3wo7hEunM=', 312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Tertiary stress";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('IYmaNGGNvV8=', 674, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "Only one among these can be predicted morphologically.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('IYmaNGGNvV8=', 676, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Tertiary stress";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('X0/zfFkrrnQ=', 678, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Secondary stress";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LxnZJY3Gzqs=', 517, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Primary stress";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 13;
    var weight = DecodeNumber('CsiVWFV8C/g=', 880, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Secondary stress can be predicted morphologically. Explain!";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('7sq99LsqkuU=', 890, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = true;
    question.shortTextQuestion = "In connected speech, what many affect a word/lexical stress placement";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('bmaITZaUhx4=', 892, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Rhythmic stress";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('75BCe49Xi24=', 252, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Tonic stress";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('znPCuEzArp4=', 258, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.isSingleAns = false;
    question.shortTextQuestion = "A word can be stressed in more than one correct and acceptable stress pattern; this phenomenon is called?";
    question.timeToAnswer = 0;
    question.noChoice = true;
    var valuation1 = DecodeNumber('znPCuEzArp4=', 260, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var choice1 = GetMultipleAnswerChoice(questionIndex, 0);
    if (choice1 === 1) question.noChoice = false;
    var answer1 = new Answer(choice1, valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Contrastive stress";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dbpNOQ4NNwg=', 1099, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var choice2 = GetMultipleAnswerChoice(questionIndex, 1);
    if (choice2 === 1) question.noChoice = false;
    var answer2 = new Answer(choice2, valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Variable stress";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('dbpNOQ4NNwg=', 1101, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var choice3 = GetMultipleAnswerChoice(questionIndex, 2);
    if (choice3 === 1) question.noChoice = false;
    var answer3 = new Answer(choice3, valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Tonic stress";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_BOOLEAN;
    const questionIndex = 16;
    var choice, valuation, noChoice = false;;
    var weight = DecodeNumber('aGc+5/MPSYY=', 464, 0, 99999);
    var numOfAnswers = 1;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "Emphatic and contrastive stress attract both grammatical and content words.";
    choice = GetBooleanChoice(questionIndex,0);
    noChoice = noChoice || !IsBooleanChoiceSelected(questionIndex, 0);
    valuation = DecodeNumber('aGc+5/MPSYY=', 464, -1, 1);
    if (valuation === -2) PrintWrongKeyword(questionIndex);
    var answer0 = new Answer(choice, valuation, 1, 0, '');
    answer0.shortTextAnswer = "Grammatical words - from, to Content words        - that, this";
    question.answers.push(answer0);
    question.noChoice = noChoice;
    return question;

}


/* Code generated function */
function CreateListLeft4()
{
    this.length = 2;
    this[0] = unescape(DecodeString("Nc51Hc+I596i7PRSJFIs88KCf3igBK1+w+1lCQ=="));
    this[1] = unescape(DecodeString("FhhI+uo7qMI+Vnu8XzvBq2o2HmXX/JnP9Qqw4w=="));

}

/* Code generated function */
function CreateListRight4()
{
    this.length = 2;
    this[0] = unescape(DecodeString("WsG1ULxwL7+HnkNNdnoI5Q=="));
    this[1] = unescape(DecodeString("dmMGybpm9VRZXG0Hsewr8w=="));

}

/* Code generated function */
function CreateListLeftHtml4()
{
    this.length = 2;

}





