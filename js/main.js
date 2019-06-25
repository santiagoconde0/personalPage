var cont = 0;
function next(){
    const content = d3.select("#content");
    if (cont == 0) {
        d3.select("#mainDiv").style("height", "30%");
        content.selectAll("h1").text("");   
        content.selectAll("h2").text("")
            .append("div")
            .attr("id", "aboutMe")
            .attr("class", "container")
            .append("p").text("I'm developer from Bogotá, Colombia. ").append("br");
        d3.select("#aboutMe").append("p").text("Currently, I work as a PEGA system architect at Scotiabank.").append("br");
        d3.select("#aboutMe").append("p").text("I'm a studying a master in Systems and computing engineering at Universidad de Los Andes.").append("br");
        d3.select("#aboutMe").append("p").text("I have experience in the technology area developing software solutions in teams with agile methodologies, Scrum and cross-functional team.").append("br");
        d3.select("#aboutMe").append("p").text("I'm passionate about learning the new technologies that are changing our world. ");
        cont = cont + 1;
        return true     
    }
    if (cont == 1) {
        d3.select("#mainDiv").style("height", "1%");
        content.selectAll("h1").text("").append("p").text("Experience").style("font-size", "0.8em");
        content.select("#aboutMe").remove()   
        content.selectAll("h2").text("")
            .append("div")
            .attr("id", "experience")
            .attr("class", "container");
        const experience = content.select("#experience");
        const scotiabank = experience.append("div").attr("id", "Scotiabank");
        const amym = experience.append("div").attr("id", "amym");
        const colsubsidio = experience.append("div").attr("id", "colsubsidio");
            
        scotiabank.append("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Logo_Scotiabank_%28Kanada%29.svg/1280px-Logo_Scotiabank_%28Kanada%29.svg.png")
                .attr("width", "190")
                .attr("alt", "Scotiabank logo")
                .attr("class", "img");
                scotiabank.append("h4").text("PEGA System Architect (Developer) - Bogotá, Colombia.").style("font-size", "0.8em");
                scotiabank.append("div").attr("class", "container").append("h4").text("• Work on developing new features, deployment and given support for the HR app that supports around 88k employees across the world. All this work is based on Agile methodologies like Scrum. ").style("font-size", "0.5em");   
                amym.append("h3").append("b").text("AMYM").style("font-size", "1.5em");
                amym.append("h4").text("Developer - Bogotá, Colombia.").attr("class", "h4").style("font-size", "0.8em");
                amym.append("div").attr("class", "container").append("h4").text("• Worked on the development of an internal app for the automation of some admin and production process.").style("font-size", "0.5em");   
                colsubsidio.append("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Colsubsidio_logo.svg/1280px-Colsubsidio_logo.svg.png")
                .attr("width", "170")
                .attr("alt", "Colsubsidio logo")
                .attr("class", "img");
            colsubsidio.append("h4").text("Internship - Bogotá, Colombia.").attr("class", "h4").style("font-size", "0.8em");
            colsubsidio.append("div").attr("class", "container").append("h4").text("• Internship in the security area, helping to create new security implementations and evaluating the vulnerabilities of the company.").style("font-size", "0.5em");   
            cont = cont + 1;
            return true     
    }
    if (cont == 2) {
        d3.select("#mainDiv").style("height", "30%");
        content.selectAll("h1").text("Education");   
        content.selectAll("h2").text("")
            .append("div")
            .attr("id", "education")
            .attr("class", "container");
        education = d3.select("#education");
        education.append("h2").text("Universidad de Los Andes - Bogotá, Colombia   |   2018 - Expected 2020");
        education.append("h3").text("Master, Systems and Computing Engineering ");
        education.append("h2").text("Universidad Católica de Colombia - Bogotá, Colombia   |   2012 - 2016");
        education.append("h3").text("Bachelor, Industrial Engineering");
        education.append("h3").text("Bachelor, Electronic Engineering");
        cont = cont + 1;
        return true     
    }
    if (cont == 3) {
        d3.select("#mainDiv").style("height", "5%");
        content.selectAll("h1").text("Selected Projects");   
        content.selectAll("h2").text("")
        .append("div")
        .attr("id", "projects")
        .attr("class", "container");
        projects = d3.select("#projects");
        projects.append("div").attr("class", "row").attr("id", "row");
        d3.select("#row").append("div").attr("class", "col").append("a").attr("href", "https://santiagoconde0.github.io/sabemosLoQueHiciste/").append("img").attr("src", "src/img/sabemosLoQueHiciste.gif").attr("width", "350");
        d3.select("#row").append("div").attr("class", "col").append("a").attr("href", "https://santiagoconde0.github.io/commonDowns/").append("img").attr("src", "src/img/IDF.gif").attr("width", "350");
        d3.select("#row").append("div").attr("class", "w-100")
        d3.select("#row").append("div").attr("class", "col").append("a").attr("href", "https://santiagoconde0.github.io/EstupefacientesColombia/").append("img").attr("src", "src/img/nasa.png").attr("width", "350");
        d3.select("#row").append("div").attr("class", "col").append("a").attr("href", "https://github.com/santiagoconde0/globalTemperature").append("img").attr("src", "src/img/estupefacientes.png").attr("width", "350");
        cont = cont + 1;
        return true     
    }
    if (cont == 4) {
        d3.select("#mainDiv").style("height", "20%");
        content.selectAll("h1").text("Skills");   
        content.selectAll("h2").text("").append("img").attr("src", "src/img/skills.png").attr("width", "550");   
        cont = cont + 1;
        return true     
    }
    if (cont == 5) {
        d3.select("#mainDiv").style("height", "10%");
        content.selectAll("h1").text("Hobbies");   
        content.selectAll("h2").text("")
        .append("div")
        .attr("id", "hobbies")
        .attr("class", "container");
        hobbies = d3.select("#hobbies");
        hobbies.append("p").text("On my free time, I do longboard skateboarding.");
        hobbies.append("img").attr("src", "src/img/longboard.jpg").attr("width", "400");   
        cont = cont + 1;
        return true     
    }
    else{
        content.selectAll("h1").text("Contact Me");   
        content.selectAll("h2").text("")
        .append("div")
        .attr("id", "contactme")
        .attr("class", "container");
        contactme = d3.select("#contactme");
        contactme.append("h2").text("+57 3058148948")
        contactme.append("h2").text("santiagoconde03@gmail.com")
        contactme.append("h2").append("a").text("LinkedIn").attr("href" , "https://www.linkedin.com/in/santiagosuarezconde/")
        contactme.append("h2").append("a").text("GitHub").attr("href" , "https://github.com/santiagoconde0")
        cont = cont + 1;
        return true     
    }
}
