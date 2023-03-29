import { Key } from 'webdriverio'

describe('Test Shadow DOM', () => {
    it('click to generate guid and copy to clipboard', async() => {
        await browser.url('http://uitestingplayground.com/shadowdom')
        
        console.log("URL: ", await browser.getUrl());

        const guidGeneratorDiv = await $('div guid-generator');
        
        const guidGeneratorBtn = await guidGeneratorDiv.shadow$('#buttonGenerate');
        await guidGeneratorBtn.click();

        const guidGeneratonCopyBtn = await guidGeneratorDiv.shadow$('#buttonCopy');
        await guidGeneratonCopyBtn.click();

        const guidGeneratorInput = await guidGeneratorDiv.shadow$('#editField');
        const guidOriginal = await guidGeneratorInput.getValue();
        console.log("GUID: ", guidOriginal);
        
        await guidGeneratorInput.clearValue();

        await guidGeneratorInput.click();
        await browser.keys([Key.Ctrl, 'v']);

        const guidCopied = await guidGeneratorInput.getValue();
        console.log("GUID copied: ", guidCopied);

        expect(guidOriginal).not.toEqual(guidCopied);


    });
})