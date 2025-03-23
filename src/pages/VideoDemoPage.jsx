
import React, { useState, useEffect } from 'react';
import DemoNavBar from '../components/DemoNavBar';
import { 
  ResizablePanelGroup, 
  ResizablePanel, 
  ResizableHandle 
} from "@/components/ui/resizable";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Video, VideoOff, MessageSquare, Users, Share2 } from 'lucide-react';
import Footer from '../components/Footer';

const VideoDemoPage = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [code, setCode] = useState(`// Welcome to DevCollab Code Editor
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Try modifying this code together!
console.log("Factorial of 5:", factorial(5));
`);

  const [messages, setMessages] = useState([
    { user: 'Sarah', message: 'Hey team, I think we should optimize the factorial function' },
    { user: 'John', message: 'What about using memoization to cache the results?' },
    { user: 'Alex', message: 'Good idea, that would help with performance for repeated calls' }
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { user: 'You', message: newMessage }]);
      setNewMessage('');
    }
  };

  // Simulate code collaboration
  useEffect(() => {
    const timer = setTimeout(() => {
      if (code.includes('factorial(n - 1)')) {
        const updatedCode = code.replace(
          'function factorial(n) {',
          'function factorial(n) {\n  // Added memoization for better performance\n  const cache = {};\n  if (cache[n]) return cache[n];'
        ).replace(
          'return n * factorial(n - 1);',
          'const result = n * factorial(n - 1);\n  cache[n] = result;\n  return result;'
        );
        setCode(updatedCode);
      }
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [code]);

  return (
    <div className="min-h-screen flex flex-col">
      <DemoNavBar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Live Code Collaboration Demo</h1>
            <p className="text-muted-foreground">
              Experience real-time collaboration with video chat and code sharing - just like using our platform with real developers.
            </p>
          </div>
          
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[600px] rounded-lg border"
          >
            <ResizablePanel defaultSize={50} minSize={30}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={60} minSize={30}>
                  <div className="h-full p-3 bg-black">
                    <div className="grid grid-cols-2 gap-3 h-full">
                      <Card className="bg-slate-900/60 border-slate-800 overflow-hidden">
                        <div className="relative h-full">
                          {isVideoOn ? (
                            <div className="h-full flex items-center justify-center overflow-hidden rounded-md">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
                              <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
                                alt="Collaborator" 
                                className="object-cover w-full h-full"
                              />
                              <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                Sarah
                              </div>
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center bg-slate-800 text-slate-400 rounded-md">
                              <Users size={48} />
                              <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                                Sarah (Video Off)
                              </div>
                            </div>
                          )}
                        </div>
                      </Card>
                      
                      <Card className="bg-slate-900/60 border-slate-800 overflow-hidden">
                        <div className="relative h-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-600 opacity-20"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                            alt="Me" 
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            You
                          </div>
                        </div>
                      </Card>

                      <Card className="bg-slate-900/60 border-slate-800 overflow-hidden">
                        <div className="relative h-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-600 opacity-20"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                            alt="Collaborator" 
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            John
                          </div>
                        </div>
                      </Card>

                      <Card className="bg-slate-900/60 border-slate-800 overflow-hidden">
                        <div className="relative h-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-600 opacity-20"></div>
                          <img 
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" 
                            alt="Collaborator" 
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                            Alex
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </ResizablePanel>
                
                <ResizableHandle withHandle />
                
                <ResizablePanel defaultSize={40}>
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex-grow overflow-auto mb-4 space-y-4">
                      {messages.map((msg, index) => (
                        <div 
                          key={index} 
                          className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-[80%] rounded-lg px-4 py-2 ${
                              msg.user === 'You' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-secondary text-secondary-foreground'
                            }`}
                          >
                            <div className="font-semibold text-sm">{msg.user}</div>
                            <div>{msg.message}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <form onSubmit={sendMessage} className="flex gap-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-grow px-3 py-2 bg-background border rounded-md"
                      />
                      <Button type="submit">Send</Button>
                    </form>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            
            <ResizableHandle withHandle />
            
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="bg-slate-900 text-white p-2 flex items-center gap-2">
                  <div className="text-sm font-mono">factorial.js</div>
                  <div className="flex-grow"></div>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
                <div className="flex-grow bg-slate-950 text-slate-300 p-4 font-mono text-sm overflow-auto whitespace-pre">
                  <pre>{code}</pre>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
          
          <div className="mt-4 flex justify-center space-x-4 p-4 border-t">
            <Button 
              variant={isMicOn ? "default" : "destructive"} 
              size="icon" 
              className="rounded-full h-12 w-12"
              onClick={toggleMic}
            >
              {isMicOn ? <Mic /> : <MicOff />}
            </Button>
            
            <Button 
              variant={isVideoOn ? "default" : "destructive"} 
              size="icon" 
              className="rounded-full h-12 w-12"
              onClick={toggleVideo}
            >
              {isVideoOn ? <Video /> : <VideoOff />}
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12"
            >
              <MessageSquare />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12"
            >
              <Users />
            </Button>
            
            <Button 
              variant="destructive" 
              className="rounded-full px-6"
            >
              End Session
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoDemoPage;
