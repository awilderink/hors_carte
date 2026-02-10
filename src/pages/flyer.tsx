import { useEffect, useState } from "react";
import event01 from "../events/01.json";

// --- Types ---
interface LineupItem {
	name: string;
	qty: string;
}

interface EventData {
	title: string;
	date: string;
	venue: string;
	lineup: LineupItem[];
	footerTitle: string;
	orderDue: string;
}

const events: Record<string, EventData> = {
	"01": event01 as unknown as EventData,
};

// --- Components ---

const Divider = () => (
	<div className="my-[0.5em] w-full shrink-0 border-[#111] border-b-2 border-dashed" />
);

const InfoRow = ({ label, value }: { label: string; value: string }) => (
	<div className="my-3 flex text-[1.8em]">
		<span className="w-1/3">{label}</span>
		<span className="flex-1">{value}</span>
	</div>
);

// --- Page ---

const LineupPage: React.FC = () => {
	const [data, setData] = useState<EventData>(events["01"]);

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const id = searchParams.get("event") || "01";

		// Direct load
		const eventData = events[id] || events["01"];
		setData(eventData);
		document.title = eventData.title;
	}, []);

	return (
		<>
			<div className="my-2 shrink-0 text-center text-[1.8em] tracking-[0.05em]">
				{data.title}
			</div>

			<Divider />

			<InfoRow label="DATE:" value={data.date} />
			<Divider />
			<InfoRow label="VENUE:" value={data.venue} />
			<Divider />

			<div className="mt-[0.5em] flex w-full grow items-center whitespace-pre-line text-[1.8em] leading-[1.4]">
				<div className="space-y-2">
					{data.lineup.map((item) => (
						<div key={item.name} className="flex">
							<span>
								{item.qty} x {item.name}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className="my-4 flex justify-center">
				<img
					className="h-auto w-[6em] contrast-120 grayscale"
					src="/branding/logo.jpeg"
					alt="logo"
				/>
			</div>

			<div className="shrink-0 text-center text-[1.6em] tracking-[0.05em]">
				{data.footerTitle}
			</div>

			<Divider />

			<div className="my-[0.2em] text-center text-4xl">
				- ORDER DUE: {data.orderDue} -
			</div>
		</>
	);
};

export default LineupPage;
