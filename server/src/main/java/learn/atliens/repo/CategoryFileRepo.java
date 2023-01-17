package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import learn.atliens.model.Word;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CategoryFileRepo implements CategoryRepo{

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    @Override
    public List<Word> findAllWords() {
        return dynamoDBMapper.scan(Word.class, new DynamoDBScanExpression());
    }

    @Override
    public Word findWordById(int wordId) {
        return null;
    }
}
