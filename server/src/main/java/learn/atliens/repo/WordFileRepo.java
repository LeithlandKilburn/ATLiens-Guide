package learn.atliens.repo;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import learn.atliens.model.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
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
//        System.out.println();
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

        List<Word> filteredWords = new ArrayList<>();

        for (int i = 0; i < all.size(); i++) {
            System.out.println(all.get(i).getCategories());
            if (all.get(i).getCategories().contains(category)) {
                filteredWords.add(all.get(i));
            }
        }

        return filteredWords;

//        all.stream()
//                .filter(word -> {
//                    System.out.println(word);
//                    // check if it's null before you return
//                    if (word.getCategories() != null) {
//                        System.out.println(word.getCategories());
//                        if (word.getCategories().contains(category)) {
//                            filteredWords.add(word);
//                        }
//                    }
////                    return word.getCategories().contains(category);
//                    return true;
//                });
//        return filteredWords;
//                .collect(Collectors.toList());
    }

    @Override
    public String updateWord(String wordId, Word word) {
        dynamoDBMapper.save(word,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("wordId",
                                new ExpectedAttributeValue(
                                        new AttributeValue().withS(wordId)
                                )));
        return "Word Updated!";
    }

    @Override
    public String deleteWordById(String wordId) {
        Word wordToDelete = dynamoDBMapper.load(Word.class, wordId);
        dynamoDBMapper.delete(wordToDelete);
        return "Word Deleted!";
    }
}
