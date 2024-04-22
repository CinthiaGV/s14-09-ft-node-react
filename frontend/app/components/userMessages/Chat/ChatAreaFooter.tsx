import { Send } from 'react-feather';

export default function ChatAreaFooter() {
  return (
    <div className="chat-area-footer-container relative w-full h-full">
      <div className="chat-area-footer flex items-center justify-between bg-white border-t border-gray-300 p-2">
        <textarea
          placeholder="Type something here..."
          className="flex-1 mr-2 border rounded-lg px-1 bg-gray text-white resize-none"
          rows={3}
        />
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
