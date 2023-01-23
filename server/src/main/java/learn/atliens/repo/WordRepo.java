package learn.atliens.repo;

import learn.atliens.model.Word;

import java.util.List;

public interface WordRepo {

    //CRUD

    // addWord
    Word addWord(Word word);

    // findAllWords
    List<Word> findAllWords();

    // findWordByName
    Word findWordByName(String name);

    // findWordsByCategory
//    List<Word> findWordsByCategory(String category);

    // updateWord
    String updateWord (String wordId, Word word);

    // deleteWordById
    String deleteWordById(String wordId);
}
