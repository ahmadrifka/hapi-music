import LoginService from '../services/login.service';

const validate = async (request, username, password, session) => {
    const user = await new LoginService().findByUsername(username);
    const sessionUser = user.id == session.id;
    if (!user) {
        return { credentials: null, isValid: false }
    }

    const isValid = await new LoginService().validatePassword(password, user.password);
    const credentials = { id: user.id, name: user.username }

    return { isValid, credentials };
}

export default validate;