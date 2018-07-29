function myFirstApp(name, age) {
    alert("Привет, меня зовут " + name + " и это моя первая программа");

    function showSkills() {
        let skills = ['html', 'css', 'bootstrap', 'javaScript'];

        for (let i = 0; i < skills.length; i++) {
            document.write("Я владею: " + skills[i] + "<br/>");
        }
    }
    showSkills();

    function checkAge() {
        if (age > 18) {
            document.write("Ты уже готов стать отличным разработчиком!");
        }
        else {
            document.write("Тебе нужно еще подождать...");
        }
    }
    checkAge();

    function calcPow(num) {
        console.log(num * num);
    }

    calcPow(5);

}

myFirstApp("Ирина", 31);















