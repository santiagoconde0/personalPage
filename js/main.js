var cont = 0;
function next(){
    const content = d3.select("#contentDinamic");
    if (cont == 0) {
        d3.select("#mainDiv").style("height", "30%");
        content.selectAll("h1").text("");   
        content.selectAll("h2").text("")
            .append("div")
            .attr("id", "aboutMe")
            .attr("class", "container")
            .append("p").text("I'm developer from Bogotá, Colombia. ").append("br");
        d3.select("#aboutMe").append("p").text("Currently, I work as a PEGA System Architect at Scotiabank.").append("br");
        d3.select("#aboutMe").append("p").text("I'm a studying a master in Systems and Computing Engineering at Universidad de Los Andes.").append("br");
        d3.select("#aboutMe").append("p").text("I have experience in the technology area developing software solutions in teams with agile methodologies like Scrum").append("br");
        d3.select("#aboutMe").append("p").text("I'm passionate about learning the new technologies that are changing our world. ");
        cont = cont + 1;
        return true     
    }
    if (cont == 1) {
        d3.select("#mainDiv").style("height", "0%");
        content.selectAll("h1").text("").append("p").text("Experience").style("font-size", "0.7em").append("hr");
        content.select("#aboutMe").remove();
        content.selectAll("h2").text("");
        d3.select("#experience").style("display","");
            cont = cont + 1;
            return true     
    }
    if (cont == 2) {
        d3.select("#experience").style("display","none");
        d3.select("#mainDiv").style("height", "30%");
        content.selectAll("h1").text("Education");   
        content.selectAll("h2").text("")
            .append("div")
            .attr("id", "education")
            .attr("class", "container");
        education = d3.select("#education");
        education.append("h2").text("Universidad de Los Andes - Bogotá, Colombia   |   201\8 - present");
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
        contactme.append("h2").text("+57 3058148948");
        contactme.append("h2").text("santiagoconde03@gmail.com");
        contactme.append("h2").append("a").text("LinkedIn").attr("href" , "https://www.linkedin.com/in/santiagosuarezconde/");
        contactme.append("h2").append("a").text("GitHub").attr("href" , "https://github.com/santiagoconde0");
        d3.select("#arrow").style("display", "none");
        cont = cont + 1;
        return true     
    }
}
