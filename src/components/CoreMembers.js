import React from "react";

export default function CoreMembers({ members }) {
	return (
		<section className="core-members">
			<div className="members-row">
				{members.map((member, index) => (
					<div
						key={index}
						className={`member-card ${
							index === 0
								? "side"
								: index === 1
								? "center"
								: "side"
						}`}
					>
						<div className="image-wrapper">
							<img src={member.img} alt={member.name} />
							<div className="quote">{member.quote}</div>
						</div>
						<div className="member-info">
							<h4>{member.name}</h4>
							<p>{member.post}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
