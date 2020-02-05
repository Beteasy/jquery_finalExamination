var editor;

KindEditor.ready(function (K) {
    editor = K.create("textarea[name='editor']", {
        allowFileManager: true,
        resizeType: 0,
        height: 200
    });
})
