package learn.atliens.repo;

import learn.atliens.model.Word;

import java.util.List;

public class WordFileRepo implements WordRepo{
    @Override
    public Word addWord(Word word) {
        return null;
    }

    @Override
    public List<Word> findAllWords() {
        return null;
    }

    @Override
    public Word findWordById(int wordId) {
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
