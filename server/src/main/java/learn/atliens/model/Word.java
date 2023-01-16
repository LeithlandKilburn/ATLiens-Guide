package learn.atliens.model;

//word_id int primary key auto_increment,
//name varchar(1000) not null (doesn’t have to be unique)
//definition varchar(2048) not null
//example varchar (2048) not null
//video_url varchar(2048) (optional)
//use_rating int(5) not null (limit number 1 to 5)

public class Word {

    private int word_id;
    private String name;
    private String definition;
    private String example;
    private String video_url;
    private int use_rating;
//    private List<Category> categoryList;


}
