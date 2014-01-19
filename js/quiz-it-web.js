QuizItWeb = {

    /* Variables */
    activeQuiz: null,

    /* Helpers */
    _getParameterByName: function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },

    /* Event Handlers */
    onAnswerInput_keydown: function (e) {
        if (e.keyCode === 13) {
            QuizItWeb.guess();
        }
    },

    onGuessButton_click: function () {
        QuizItWeb.guess();
    },

    /* Methods */
    init: function () {
        var quizName = this._getParameterByName("quiz");

        try {
            QuizIt.start(quizName);
        } catch (ex) {
            alert(ex);
        }

        this.activeQuiz = QuizIt.getActiveQuiz();

        // Set up some things.
        $(".js-message").html(QuizIt.getMessageText());
        this._update();

        $(".js-guess-button").on("click", this.onGuessButton_click);
        $(".js-answer-input").on("keydown", this.onAnswerInput_keydown);
    },

    guess: function () {
        var answer = $(".js-answer-input").val();
        var right;
        var message;

        try {
            right = QuizIt.guess(answer);
        } catch (ex) {
            message = ex;
        }

        if (right === true) {
            message = "You got it right!";
            $(".js-answer-input").val(null);
        } else if (right === false) {
            message = "You got it wrong. The answer is '{0}'.".format(QuizIt.getCurrentAnswer());
        }

        $(".js-response").html(message);

        this._update();

        $(".js-answer-input").select();
    },

    _update: function () {
        $(".js-prompt").html(QuizIt.getCurrentPrompt());

        // Update the progress indicators.
        var progress = QuizIt.getProgress();
        $(".js-progress-indicator").html("{0} of {1}".format(
                progress.rightCount + progress.wrongCount + 1, QuizIt.getProblemTotal()));
        $(".js-right-count").html("{0} right".format(progress.rightCount));
        $(".js-wrong-count").html("{0} wrong".format(progress.wrongCount));
    }

};