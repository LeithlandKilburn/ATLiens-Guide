package learn.atliens.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.Data;

import java.util.List;

@Data
@DynamoDBTable(tableName = "forumPosts")
public class ForumPost {

    @DynamoDBHashKey
    @DynamoDBAutoGeneratedKey
    private String forumPostID;

    /*@DynamoDBIndexHashKey (globalSecondaryIndexName = "name-useRating-index")*/
    @DynamoDBAttribute
    private String name;

    @DynamoDBAttribute
    private String definition;

    @DynamoDBAttribute
    private String example;

    /*@DynamoDBIndexRangeKey(globalSecondaryIndexName = "name-useRating-index")*/
    @DynamoDBAttribute
    private int useRating;

    @DynamoDBAttribute
    private String categories;

    @DynamoDBTyped(DynamoDBMapperFieldModel.DynamoDBAttributeType.BOOL)
    @DynamoDBAttribute
    private boolean isExplicit;

}
