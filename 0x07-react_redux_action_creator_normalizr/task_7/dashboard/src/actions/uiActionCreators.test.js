import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

const middleWares = [thunk];
const mockStore = configureStore(middleWares);

describe("tests for UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "james@gmail.com";
    const password = "heheheh";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "james@gmail.com", password: "heheheh" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });

  // it('should pass LOGIN and LOGIN_SUCCESS to the store if API returns the right response', () => {
  // 	fetchMock.get('http://localhost:8564/login-success.json', {
  // 		first_name: 'Johann',
  // 		last_name: 'Salva',
  // 		email: 'johann.salva@alxafrica.nz',
  // 		profile_picture: 'http://placehold.it/32x32',
  // 	});

  // 	const store = mockStore({});
  // 	const email = 'johann.salva@alxafrica.nz';
  // 	const password = 'password';

  // 	return store.dispatch(
  // 		loginRequest(email, password).then(() => {
  // 			const actions = store.getActions();
  // 			console.log(actions);
  // 			expect(actions[0]).toEqual(loginSuccess());
  // 			expect(actions[1]).toEqual(login());
  // 		})
  // 	);
  // 	fetchMock.restore();
  // });

  // it('should pass LOGIN and LOGIN_FAILURE if API query fails', () => {
  // 	fetchMock.get('http://localhost:8564/login-success.json', 400);

  // 	const store = mockStore({});
  // 	const email = 'johann.salva@alxafrica.nz';
  // 	const password = 'password';

  // 	return store.dispatch(
  // 		loginRequest(email, password).then(() => {
  // 			const actions = store.getActions();
  // 			console.log(actions);
  // 			expect(actions[0]).toEqual(loginFailure());
  // 			expect(actions[1]).toEqual(login());
  // 		})
  // 	);

  // 	fetchMock.restore();
  // });
});
