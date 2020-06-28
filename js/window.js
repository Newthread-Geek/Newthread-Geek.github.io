var prompt = {
    window: $(".window"),
    shortcut: $(".prompt-shortcut"),
    input: $(".js-prompt-input"),
    init: function() {
        $(".js-minimize").click(prompt.close);
        $(".js-maximize").click(prompt.maximize);
        $(".js-close").click(prompt.close);
        $(".js-open").click(prompt.open);
        $(".js-minimize2").click(prompt2.close2);
        $(".js-maximize2").click(prompt2.maximize2);
        $(".js-open2").click(prompt2.open2);
        $(".js-close2").click(prompt2.close2);
        $(".js-minimize3").click(prompt3.close3);
        $(".js-maximize3").click(prompt3.maximize3);
        $(".js-open3").click(prompt3.open3);
        $(".js-close3").click(prompt3.close3);
        $(".js-minimize4").click(prompt4.close4);
        $(".js-maximize4").click(prompt4.maximize4);
        $(".js-open4").click(prompt4.open4);
        $(".js-close4").click(prompt4.close4)
    },
    focus: function() {
        prompt.input.focus()
    },
    minimize: function() {
        prompt.window.removeClass("window--maximized");
        prompt.window.toggleClass("window--minimized")
    },
    maximize: function() {
        prompt.window.removeClass("window--minimized");
        prompt.window.toggleClass("window--maximized")
    },
    close: function() {
        prompt.window.addClass("window--destroyed");
        prompt.window.removeClass("window--maximized window--minimized");
        prompt.shortcut.removeClass("hidden");
        prompt.input.val("")
    },
    open: function() {
        prompt.window.removeClass("window--destroyed");
        prompt.shortcut.addClass("hidden")
    }
};
$(document).ready(prompt.init);
prompt.close();
var prompt2 = {
    window2: $(".window2"),
    shortcut: $(".prompt-shortcut"),
    input2: $(".js-prompt-input2"),
    focus2: function() {
        prompt2.input2.focus()
    },
    minimize2: function() {
        prompt2.window2.removeClass("window--maximized");
        prompt2.window2.toggleClass("window--minimized")
    },
    maximize2: function() {
        prompt2.window2.removeClass("window--minimized");
        prompt2.window2.toggleClass("window--maximized")
    },
    close2: function() {
        prompt2.window2.addClass("window--destroyed");
        prompt2.window2.removeClass("window--maximized window--minimized");
        prompt2.shortcut.removeClass("hidden");
        prompt2.input2.val("")
    },
    open2: function() {
        prompt2.window2.removeClass("window--destroyed");
        prompt2.shortcut.addClass("hidden")
    }
};
prompt2.close2();
var prompt2 = {
    window2: $(".window2"),
    shortcut: $(".prompt-shortcut"),
    input2: $(".js-prompt-input2"),
    focus2: function() {
        prompt2.input2.focus()
    },
    minimize2: function() {
        prompt2.window2.removeClass("window--maximized");
        prompt2.window2.toggleClass("window--minimized")
    },
    maximize2: function() {
        prompt2.window2.removeClass("window--minimized");
        prompt2.window2.toggleClass("window--maximized")
    },
    close2: function() {
        prompt2.window2.addClass("window--destroyed");
        prompt2.window2.removeClass("window--maximized window--minimized");
        prompt2.shortcut.removeClass("hidden");
        prompt2.input2.val("")
    },
    open2: function() {
        prompt2.window2.removeClass("window--destroyed");
        prompt2.shortcut.addClass("hidden")
    }
};
prompt2.close2();
var prompt3 = {
    window3: $(".window3"),
    shortcut: $(".prompt-shortcut"),
    input3: $(".js-prompt-input3"),
    focus3: function() {
        prompt3.input3.focus()
    },
    minimize3: function() {
        prompt3.window3.removeClass("window--maximized");
        prompt3.window3.toggleClass("window--minimized")
    },
    maximize3: function() {
        prompt3.window3.removeClass("window--minimized");
        prompt3.window3.toggleClass("window--maximized")
    },
    close3: function() {
        prompt3.window3.addClass("window--destroyed");
        prompt3.window3.removeClass("window--maximized window--minimized");
        prompt3.shortcut.removeClass("hidden");
        prompt3.input3.val("")
    },
    open3: function() {
        prompt3.window3.removeClass("window--destroyed");
        prompt3.shortcut.addClass("hidden")
    }
};
prompt3.close3();
var prompt4 = {
    window4: $(".window4"),
    shortcut: $(".prompt-shortcut"),
    input4: $(".js-prompt-input4"),
    focus4: function() {
        prompt4.input4.focus()
    },
    minimize4: function() {
        prompt4.window4.removeClass("window--maximized");
        prompt4.window4.toggleClass("window--minimized")
    },
    maximize4: function() {
        prompt4.window4.removeClass("window--minimized");
        prompt4.window4.toggleClass("window--maximized")
    },
    close4: function() {

        prompt4.window4.addClass("window--destroyed");
        prompt4.window4.removeClass("window--maximized window--minimized");
        prompt4.shortcut.removeClass("hidden");

        prompt4.input4.val("")
    },
    open4: function() {
        prompt4.window4.removeClass("window--destroyed");
        prompt4.shortcut.addClass("hidden")
    }
};
prompt4.close4();
$("#demo-canvas").click(prompt4.close4);
$("#demo-canvas").click(prompt.close);
$("#demo-canvas").click(prompt2.close2);
$("#demo-canvas").click(prompt3.close3);
