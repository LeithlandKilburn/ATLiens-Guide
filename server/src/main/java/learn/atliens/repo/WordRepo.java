package learn.atliens.repo;

import learn.atliens.model.Word;

import java.util.List;

public interface WordRepo {

    //CRUD

    // addWord
    Word addWord(Word word);

    // findAllWords
    List<Word> findAllWords();

    // findWordById
    Word findWordById(int wordId);

    // findWordsByCategory
//    List<Word> findWordsByCategory(String category);

    // updateWord
    boolean updateWord (Word word);

    // deleteWordById
    boolean deleteWordById(int wordId);
}
