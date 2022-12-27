test("test toBe", () => { 
    const name = "Angga";
    const hello  = "Hello " + name;

    expect(hello).toBe("Hello Angga") //expektasi saya variabel hello itu adalah "hello angga"

 });

 test("test toEquals", () => {
    let person = {id: "Angga"};
    Object.assign(person, {name: "Angga"});

    expect(person).toEqual({id: "Angga", name: "Angga"});
 })
