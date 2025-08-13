import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    constructor(User) {
        this.User = User;
    }

    async registerUser(req, res) {
        const { email, password } = req.body;

        try {
            const existingUser = await this.User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new this.User({ email, password: hashedPassword });
            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body;

        try {
            const user = await this.User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    }
}

export default AuthController;