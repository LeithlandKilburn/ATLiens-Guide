package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class  WordFileRepo implements WordRepo {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Override
    public Word addWord(Word word) {
        // dynamoDbMapper.save() = inserts or updates operation depending on whether the item already exists in the table.
        dynamoDBMapper.save(word);
        System.out.println("Word added!");
        return word;
    }

    @Override
    public List<Word> findAllWords() {
        // dynamoDbMapper.scan() = method to retrieve all the records of a table
        // Word.class = the class of the obj to be returned
        // DynamoDbScanExpression is like a filter. If empty, it returns everything on table
        return dynamoDBMapper.scan(Word.class, new DynamoDBScanExpression());
    }

    @Override
    public Word findWordByName(String name) {
        return null;
    }

    @Override
    public boolean updateWord(Word word) {
        return false;
    }

    @Override
    public boolean deleteWordById(int wordId) {
        return false;
    }
}
