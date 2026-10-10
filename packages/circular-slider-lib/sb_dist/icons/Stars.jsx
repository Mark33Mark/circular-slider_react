const starPath = 'M 12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2z';

const StarCanvas = () => <rect width="100" height="100" rx="15" fill="transparent" stroke="transparent" strokeWidth="2" />;

// ==================== HELPER COMPONENT ====================
// This groups the circle and star together and moves them as one unit
const StarWithBg = ({ x, y }) => (
    <g transform={`translate(${x}, ${y})`}>
        {/* Dark background circle. cx="12" cy="12" centers it perfectly behind the star */}
        <circle cx="12" cy="12" r="14" fill="#111111" />
        <path d={starPath} />
    </g>
);

// ==================== 1 STAR (Center) ====================
export const OneStar = props => (
    <svg viewBox="0 0 100 100" fill="#FFD700" {...props}>
        <StarCanvas />
        <StarWithBg x={38} y={38} />
    </svg>
);

// ==================== 2 STARS (Top-Left, Bottom-Right) ====================
export const TwoStars = props => (
    <svg viewBox="0 0 100 100" fill="#FFD700" {...props}>
        <StarCanvas />
        <StarWithBg x={14} y={14} />
        <StarWithBg x={62} y={62} />
    </svg>
);

// ==================== 3 STARS (Diagonal Line) ====================
export const ThreeStars = props => (
    <svg viewBox="0 0 100 100" fill="#FFD700" {...props}>
        <StarCanvas />
        <StarWithBg x={14} y={14} />
        <StarWithBg x={38} y={38} />
        <StarWithBg x={62} y={62} />
    </svg>
);

// ==================== 4 STARS (Four Corners) ====================
export const FourStars = props => (
    <svg viewBox="0 0 100 100" fill="#FFD700" {...props}>
        <StarCanvas />
        <StarWithBg x={14} y={14} />
        <StarWithBg x={62} y={14} />
        <StarWithBg x={14} y={62} />
        <StarWithBg x={62} y={62} />
    </svg>
);

// ==================== 5 STARS (Four Corners + Center) ====================
export const FiveStars = props => (
    <svg viewBox="0 0 100 100" fill="#FFD700" {...props}>
        <StarCanvas />
        <StarWithBg x={14} y={14} />
        <StarWithBg x={62} y={14} />
        <StarWithBg x={38} y={38} />
        <StarWithBg x={14} y={62} />
        <StarWithBg x={62} y={62} />
    </svg>
);
