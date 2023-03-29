describe('Test Shadow DOM', () => {
    it('click to generate guid and copy to clipboard', async() => {
        await browser.url('http://uitestingplayground.com/shadowdom')
        
        console.log("URL: ", await browser.getUrl());
    });
})