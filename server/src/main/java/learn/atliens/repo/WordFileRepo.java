package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import learn.atliens.model.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class WordFileRepo implements WordRepo {

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
        List<Word> all = findAllWords();
        return all.stream()
                .filter(word -> word.getName().equalsIgnoreCase(name))
//                .collect(Collectors.toList())
//                .stream()
                .findFirst().orElse(null);
    }

    @Override
    public List<Word> findWordsByCategory(String category) {
        List<Word> all = findAllWords();
        return all.stream()
                .filter(word -> word.getCategories().contains(category))
                .collect(Collectors.toList());
    }

    @Override
    public String updateWord(String wordId, Word word) {
        dynamoDBMapper.save(word,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("wordId",
                                new ExpectedAttributeValue(
                                        new AttributeValue().withS(wordId)
                                )));
        return wordId;
    }

    @Override
    public String deleteWordById(String wordId) {
        Word wordToDelete = dynamoDBMapper.load(Word.class, wordId);
        dynamoDBMapper.delete(wordToDelete);
        return "Word Deleted!";
    }
}
