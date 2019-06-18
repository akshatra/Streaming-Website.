const INITIAL_STATE={
	isSignedIn: null
};

export default(state=INITIAL_STATE, action)=>{
	switch(action.type){
		case 'SIGN_IN':
			return{...state, isSignedIn:Trues};

		case 'SIGN_OUT':
			return{...state, isSignedIn:False};

		default:
			return state;
	}
};