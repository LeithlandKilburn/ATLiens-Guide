package learn.atliens.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.Data;

//word_id int primary key auto_increment,
//name varchar(1000) not null (doesn’t have to be unique)
//definition varchar(2048) not null
//example varchar (2048) not null
//video_url varchar(2048) (optional)
//use_rating int(5) not null (limit number 1 to 5)

@Data
@DynamoDBTable(tableName = "words")
public class Word {

    @DynamoDBHashKey
    @DynamoDBAutoGeneratedKey
    private String wordId;

    @DynamoDBAttribute
    private String name;

    @DynamoDBAttribute
    private String definition;

    @DynamoDBAttribute
    private String example;

    @DynamoDBAttribute
    private String videoUrl;

    @DynamoDBAttribute
    private String useRating;

    @DynamoDBAttribute
    private String category1Id;

    @DynamoDBAttribute
    private String category2Id;

    @DynamoDBAttribute
    private String category3Id;

}