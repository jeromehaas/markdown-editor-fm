import { Dashboard } from 'components/03-organisms/dashboard/dashboard';
import { useSelector } from 'react-redux';

export default function DashboardPage() {

	const theme = useSelector( state => state.theme.active );

	return (
		<div className={`page page--${ theme }`}>
    		<Dashboard />
		</div>
	  );
	  
};