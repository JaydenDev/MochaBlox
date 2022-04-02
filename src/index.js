const { api, type, extension } = require('clipcc-extension');
class ExampleExtension extends Extension {
    onInit() {
        api.addCategory({
            categoryId: 'clipteam.example.category',
            messageId: 'clipteam.example.category.category',
            color: '#339900'
        });
        api.addBlock({
            opcode: 'clipteam.example.return',
            type: type.BlockType.REPORTER,
            messageId: 'clipteam.example.return.message',
            categoryId: 'clipteam.example.category',
            param: {
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Hello World!'
                }
            },
            function: args => this.ReturnValue(args.VALUE)
        });
        api.addBlock({
            opcode: 'clipteam.example.helloworld',
            type: type.BlockType.COMMAND,
            messageId: 'clipteam.example.helloworld.message',
            categoryId: 'clipteam.example.category',
            function: args => this.HelloWorld()
        });
    }
    onUninit() {
        api.removeCategory('clipteam.example.category');
    }
    ReturnValue(VALUE) {
        return VALUE;
    }
    HelloWorld() {
        console.log("Hello World!");
        alert("Hello World!");
    }
}
module.exports = ExampleExtension;