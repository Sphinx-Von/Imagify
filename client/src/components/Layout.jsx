
import nightimg from '../assets/nightimg.jpg'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      {/* Galaxy background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{
          backgroundImage:
            `url(${nightimg})`,
        }}
      />

      {/* Optional: frosted overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
