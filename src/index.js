const { Extension, type, api } = require('clipcc-extension');

class MyExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'jdev.mochablox.category',
            messageId: 'jdev.mochablox.category',
            color: '#66CCFF'
        });
        api.addBlock({
            opcode: 'jdev.mochablox.hello',
            type: type.BlockType.REPORTER,
            messageId: 'jdev.mochablox.hello',
            categoryId: 'jdev.mochablox.category',
            function: () => 'Hello, ClipCC!'
        });
    }
}

module.exports = MyExtension;
