import React from 'react';
class Table extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	loadData() {
		fetch('http://127.0.0.1:5001/')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data.test_teams_rand })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return(
			<div>
				<tbody>
					<tr className=''>
						<th>Team Name</th>
						<th>Team Wins</th>
						<th>Team Goals</th>
					</tr>
	      			{ this.state.data.map((item, i) => {
					return <tr className='item'>
								<td>{item.team_name}</td>
								<td>{item.team_noofwins}</td>
								<td>{item.team_goals}</td>
							</tr>
				        })
				      }
    			</tbody>;
			</div>
    	) 
  }
}

export default Table;
