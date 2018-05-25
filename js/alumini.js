//Likes Function
function toggleLike(likeButton){
    likeButton.children[0].classList.toggle("likeColor");
}

//Alumini List

var alumini = {
    '1':{
        'name':"Rajesh Patel" , 
        'job':"Sr. Consultant - ThomasCook", 
        'batch':"2017", 
        'info':"Rajesh Patel holds on honours bachelor of science in business administration degree from Carnegie mellon university’s tepper school  of Business. He joined London business school’s masters in finance that exist outside the realm of corporate finance, gain a global professional network and further his professional career."
    },
     '2':{ 
         "name":"Ridhim Dey" , 
         "job":"Assistant Engineer - Directi", 
         "batch":"2014", 
         "info":"He has completed an undergraduate degree from MIT and wants to pursue the masters in Finance at London business school to enhance his analytical skillset for his role in corporate finance."
     },
     '3':{ 
         "name":"Divya Kumar" , 
         "job":"Sr. Manager - Yes Bank", 
         "batch":"2016", 
         "info":"The former private banker is now senior learning manager at Saudi british bank. She has completed her education as Executive MBA. Becoming a career woman has given her a passion of helping other women in business, by supporting efforts to provide job opportunities and empowering them. she was instrumental in organising boost your career- a networking event for business women- and is a member of cella network."
     },
     '4':{ 
         "name":"Dr. Anushka Sen" , 
         "job":"Fortis - Lead Surgeon", 
         "batch":"2015", 
         "info":"Chasing my dream is what brought me to Career Cell, the door to international exposure and networks. And the Hong Kong PhD Fellowship Scheme was the key to opening up the whole new exciting worlds of cancer stem cell research and the bench-to-bedside approach. I gained invaluable critical thinking skills and strengthened my transferable skill sets including experimental techniques, cementing the basic foundation for research study. I believe that daring to dream and following 3Ps (passion, persistence and perseverance) will bring forth great achievements."
     },
     '5':{ 
         "name":"Raj Vohra" , 
         "job":"Marketing Head - Fipkart", 
         "batch":"2013", 
         "info":"After graduating from university, I didn't know what career path I wanted to follow, and I didn't feel ready to start my own business. In order to broaden my knowledge, and if I were to start my own business later on, I thought it made sense to know as much as possible about all the functional areas involved in running a business, so I decided to pursue business education. I chose London Business School’s Masters in Management programme for two reasons, the reputation of the school; and the quality of the faculty."
     },
     '6':{ 
         "name":"Nikhil Panchal" , 
         "job":"Sr. Engineer - AmazonFresh", 
         "batch":"2014", 
         "info":"Picking majors is so hard because you really don't know what job you will want when you graduate. You know your general interests, and they will evolve over time as you learn more, but you can't really predict where they will be in 4/5 years. You can, however, put yourself in the best position to make the best decision for yourself. I would take time to go through what kinds of jobs Electrical and Computer Engineers can get, as well as the jobs other majors get. If the jobs seem like ones that you're interested in and that fit your skills and personality, then it could be right. If you still don't know, take a year to be 'engineering undecided'. Spend your freshman year exploring all engineering tracks. That's what I did and it convinced me that ECE would be right for me."
     }     
};

//Modal's
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var id = parseInt(button.data('id'));
    var name = alumini[id].name;
    var company = alumini[id].job;
    var batch = alumini[id].batch;
    var info = alumini[id].info;
    var modal = $(this);
    modal.find('.modal-title').text('' + name);
    modal.find('.modal-company').text('' + company);
    modal.find('.modal-batch').text('Year of Association ' + batch);
    modal.find('.modal-info').text('' + info);    
})