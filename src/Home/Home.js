import React, { useContext } from 'react';
import { MyContext } from '../MyProvider';
import styles from './Home.module.css';
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react';

const options = [
	{ key: 'latin', text: 'Latin', value: 'latin' },
	{ key: 'italian', text: 'Italian', value: 'italian' },
	{ key: 'mexican', text: 'Mexican', value: 'mexican' },
	{ key: 'french', text: 'French', value: 'french' },
	{ key: 'american', text: 'American', value: 'american' },
	{ key: 'asian', text: 'Asian', value: 'asian' }
];

const Home = () => {
	const data = useContext(MyContext);

	return (
		<div>
			<div className={styles.cover}>
				<div className={styles.navbar}>
				</div>
				<div>
					<div className={styles.Rectangleholder}>
						<div className={styles.Rectangle2}>
							Connecting People Through Food
							<Form>
								<br></br>
								<div>Type of Food</div>
								<Dropdown
									placeholder="Select Cuisine"
									fluid
									multiple
									selection
									options={options}
								/>
                <br></br>
								<div>Select Date</div>
								<Dropdown
									placeholder="Select Date"
									fluid
									multiple
									selection
									options={options}
								/>
								<br></br>
                <div>Guests</div>
								<Dropdown
									placeholder="Guest"
									fluid
									multiple
									selection
									options={options}
								/>
								<Form.Field>
									<Checkbox label="I agree to the Terms and Conditions" />
								</Form.Field>
								<Button type="submit">Submit</Button>
							</Form>
						</div>
						<div className={styles.centerholder}>
							<div className={styles.holder}>
								<div className={styles.Lets}>LET’S</div>{' '}
								<div className={styles.eat}>EAT</div>
							</div>
							<div className={styles.Lets}>TOGETHER</div>
						</div>
					</div>
					<div>heading</div>
				</div>
			</div>
			<div>
				<div>f title</div>
				<div>
					<div>
						<div>1</div>
						<div>2</div>
					</div>{' '}
					<div>
						<div>1</div>
						<div>2</div>
					</div>{' '}
					<div>
						<div>1</div>
						<div>2</div>
					</div>{' '}
					<div>
						<div>1</div>
						<div>2</div>
					</div>{' '}
					<div>
						<div>1</div>
						<div>2</div>
					</div>{' '}
					<div>
						<div>1</div>
						<div>2</div>
					</div>
					icons
				</div>
				<div>top rated plates</div>
				<div>image component</div>
			</div>
			<div>
				footer
				<div>
					<div>c1</div>
					<div>c2</div>
					<div>c3</div>
					<div>c4</div>
				</div>
				<div>line</div>
				<div>copyright</div>
			</div>
		</div>
	);
};

export default Home;
