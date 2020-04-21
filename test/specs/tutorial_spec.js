describe("feature to be tested", ()=>{
    it("do something like opening the browser", ()=>{
        browser.url("http://explorecalifornia.org/contact.htm");
        $("#name").waitForEnabled(3000);
        $("#comments").waitForEnabled(3000);

        //input type text
        $("#name").setValue("Lucas Amaral");

        //Select
        $("#state").selectByVisibleText("Texas");

        //Checkbox
        var backpack = $("#backpack")
        browser.execute("arguments[0].scrollIntoView();", backpack);
        backpack.click();

        //Radio button
        $("#newsletter_yes").click();

        //Asserts
        $("#name").getValue().should.equal("Lucas Amaral");
        $("#state").getValue().should.equal("TX");
        backpack.isSelected().should.equal(true);
        $("#newsletter_yes").isSelected().should.equal(true);
    });
});