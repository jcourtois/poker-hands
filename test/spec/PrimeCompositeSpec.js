describe("PrimeComposite", function(){
    it("returns '1' when the input is 1", function () {
        expect(PrimeComposite(1)).toEqual("1");
    });

    it("returns '1 prime' when the input is 2", function () {
        expect(PrimeComposite(2)).toEqual("1 prime");
    });

    it("returns '1 prime prime' when the input is 3", function () {
        expect(PrimeComposite(3)).toEqual("1 prime prime");
    });

    it("returns '1 prime prime 4' when the input is 4", function () {
        expect(PrimeComposite(4)).toEqual("1 prime prime 4");
    });

    it("returns '1 prime prime 4 prime' when the input is 5", function () {
        expect(PrimeComposite(5)).toEqual("1 prime prime 4 prime");
    });

    it("returns '1 prime prime 4 prime 6' when the input is 6", function () {
        expect(PrimeComposite(6)).toEqual("1 prime prime 4 prime 6");
    });

    it("returns '1 prime prime 4 prime 6 prime 8 composite' when the input is 9", function () {
        expect(PrimeComposite(9)).toEqual("1 prime prime 4 prime 6 prime 8 composite");
    });

    it("returns '1 prime prime 4 prime 6 prime 8 composite 10' when the input is 10", function () {
        expect(PrimeComposite(10)).toEqual("1 prime prime 4 prime 6 prime 8 composite 10");
    });

    it("returns '1 prime prime 4 prime 6 prime 8 composite 10 prime 12 prime 14 composite 16 prime 18 prime 20 composite 22 prime 24 composite' when the input is 25", function () {
        expect(PrimeComposite(25)).toEqual("1 prime prime 4 prime 6 prime 8 composite 10 prime 12 prime 14 composite 16 prime 18 prime 20 composite 22 prime 24 composite");
    });
});
