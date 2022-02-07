import api from './api';
import errors from './errors';

const confirm = async (SurveyID: number, Status: "waiting" | "declined" | "confirmed") => {
	try {
		const res = await api.post(`/admin/survey/confirm`, { SurveyID, Status });

		return res;
	} catch (error) {
		return errors.errorHandler(error);
	}
};

export default {
	confirm
};
