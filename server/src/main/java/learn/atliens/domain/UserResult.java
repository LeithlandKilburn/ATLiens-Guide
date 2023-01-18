package learn.atliens.domain;

import learn.atliens.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserResult {

    private User user;

    private List<String> errors = new ArrayList<>();

    public UserResult(User resultUser) {
        user = resultUser;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public User getUser() {
        return user;
    }

    public List<String> getErrors() {
        return errors;
    }

    public boolean isSuccess() {
        return !(errors.size() > 0);
    }
}
