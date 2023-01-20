package learn.atliens.domain;

import learn.atliens.model.User;

import java.util.ArrayList;
import java.util.List;

public class UserResult {

    private User user;

    private List<String> messages = new ArrayList<>();

    public void addMessage(String format, Object... args) {
        messages.add(String.format(format, args));
    }

    public User getPayload() {
        return user;
    }
    public void setPayload(User newUser) {
        user = newUser;
    }

    public List<String> getErrors() {
        return messages;
    }

    public boolean isSuccess() {
        return !(messages.size() > 0);
    }
}
