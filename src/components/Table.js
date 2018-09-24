import React from 'react';
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'


class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	async loadData() {
		try{
			setInterval(async () => {
				fetch('http://flask-env1.xxwp3niah9.us-east-2.elasticbeanstalk.com/display10')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data.test_teams_rand })
				})
			.catch(err => console.error(this.props.url, err.toString()))
			},500)
			}catch(e){
		      console.log(e)
		    }
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return(
			<div style={{display: 'flex', justifyContent: 'center'}} className="bg blue">
				<Scroll>
					<ErrorBoundary>
						<tbody>
							<tr className='f2 i'>
								<th>Team Name</th>&nbsp;
								<th>Team Wins</th>&nbsp;
								<th>Team Goals</th>
							</tr>
							
			      			{ this.state.data.map((item, i) => {
							return (
									<tr className='tc'>
										<td className='tc pa2'>{item.team_name}</td>
										<td className='pl2'></td>
										<td className='tc pa2'>{item.team_noofwins}</td>
										<td className='pl2'></td>
										<td className='tc pa2'>{item.team_goals}</td>
									</tr>
								)						
									
						        })
						      }
						      
		    			</tbody>;
	    			</ErrorBoundary>
				</Scroll>
			</div>
    	) 
  }
}

export default Table;
