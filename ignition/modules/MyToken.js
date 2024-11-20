const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule("MyTokenModule", m => {
    const MyTokenModule = m.contract('MyToken', [
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9',
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9'
    ]);

    return { MyTokenModule };
});