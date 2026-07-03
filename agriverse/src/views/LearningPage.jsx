import React, { useState } from 'react';

export default function LearningPage({ currentPath }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(40); // 40% watched
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [answers, setAnswers] = useState({});
  const [badges, setBadges] = useState([
    { id: 1, title: 'Certified Poultry Sower', date: 'June 2026', icon: 'verified' },
    { id: 2, title: 'Basic Soil Expert', date: 'May 2026', icon: 'grass' }
  ]);

  const beginnerCourses = [
    { id: 101, title: 'Soil Preparation & Drainage Basics', duration: '4h 30m', progress: 100, lessons: 8 },
    { id: 102, title: 'Introduction to Maize Precision Sowing', duration: '2h 15m', progress: 80, lessons: 5 },
    { id: 103, title: 'Basic Farm Accounting & OPay Integration', duration: '3h 10m', progress: 20, lessons: 6 }
  ];

  const establishedCourses = [
    { id: 201, title: 'Climate-Smart Maize Cultivation', duration: '5h 15m', progress: 100, lessons: 10 },
    { id: 202, title: 'Export Quality Standards & Escrow Handling', duration: '4h 45m', progress: 80, lessons: 8 },
    { id: 203, title: 'Advanced Crop Yield Forecasting using AI', duration: '3h 30m', progress: 10, lessons: 7 }
  ];

  const activeCourses = currentPath === 'Established' ? establishedCourses : beginnerCourses;

  const handleStartCourse = (course) => {
    setSelectedCourse(course);
    setIsPlaying(true);
    setShowQuiz(false);
    setQuizScore(null);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    setQuizScore(100);
    // Add new badge!
    if (selectedCourse && !badges.some(b => b.title.includes(selectedCourse.title.split(' ')[0]))) {
      setBadges([
        ...badges,
        {
          id: Date.now(),
          title: `Expert in ${selectedCourse.title.split(' ').slice(0, 2).join(' ')}`,
          date: 'July 2026',
          icon: 'workspace_premium'
        }
      ]);
    }
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Overview */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface">3MTT Learning Hub</h2>
          <p className="text-sm text-outline mt-1">Complete courses to earn badges and increase your Credit Score.</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          {currentPath} Track Active
        </div>
      </section>

      {/* Grid containing courses and active video panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Courses list & Badges */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Courses List */}
          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-on-surface mb-4">Your Enrolled Courses</h3>
            
            <div className="space-y-4">
              {activeCourses.map((course) => (
                <div key={course.id} className="p-4 border border-outline-variant rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-primary/50 transition-colors">
                  <div className="space-y-2 flex-grow pr-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-outline uppercase tracking-wider">{course.duration}</span>
                      <span className="text-xs text-outline">•</span>
                      <span className="text-xs font-bold text-outline uppercase tracking-wider">{course.lessons} Lessons</span>
                    </div>
                    <h4 className="font-bold text-on-surface leading-snug">{course.title}</h4>
                    
                    {/* Progress Bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-grow bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-primary h-full rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-outline whitespace-nowrap">{course.progress}% complete</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleStartCourse(course)}
                    className="w-full md:w-auto px-4 py-2.5 bg-primary text-on-primary font-bold text-xs rounded-xl shadow-sm hover:bg-primary/95 active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                    {course.progress === 100 ? 'Review Course' : course.progress === 0 ? 'Start Course' : 'Resume'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Container */}
          <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-on-surface">Your Earned Badges</h3>
              <span className="text-xs font-bold text-tertiary uppercase tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                Gold Badge Status
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <div key={badge.id} className="border border-tertiary-container/30 bg-tertiary/5 p-4 rounded-xl flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-2 border border-tertiary/20">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{badge.icon}</span>
                  </div>
                  <h4 className="text-xs font-bold text-on-surface leading-tight min-h-[32px] flex items-center justify-center">{badge.title}</h4>
                  <span className="text-[10px] text-outline mt-1 block">{badge.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Audio/Video Player & Quiz Panel */}
        <div className="space-y-6">
          {selectedCourse ? (
            <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full">
                  Lesson 3 of {selectedCourse.lessons}
                </span>
                <button onClick={() => setSelectedCourse(null)} className="text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              <h4 className="font-bold text-sm text-on-surface leading-snug">{selectedCourse.title}</h4>

              {/* Player Mockup */}
              <div className="bg-slate-900 aspect-video rounded-xl relative flex flex-col justify-end p-4 overflow-hidden shadow-inner group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur text-white flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                </div>

                {/* Subtitles Overlay */}
                <div className="absolute bottom-12 left-0 right-0 text-center px-4">
                  <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {isPlaying ? "Ensure Kaduna field drain locks are cleared..." : "[Paused]"}
                  </span>
                </div>

                {/* Controls */}
                <div className="w-full text-white space-y-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px]">04:12</span>
                    <div className="flex-grow bg-white/20 h-1 rounded-full cursor-pointer relative">
                      <div 
                        className="bg-primary h-full rounded-full" 
                        style={{ width: `${videoProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px]">10:30</span>
                  </div>
                </div>
              </div>

              {selectedCourse.progress === 100 || quizScore !== null ? (
                <div className="p-4 bg-tertiary/5 border border-tertiary/20 rounded-xl text-center space-y-2">
                  <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  <h4 className="font-bold text-sm text-on-surface">Course Completed!</h4>
                  <p className="text-xs text-outline">You earned your 3MTT badge and +15 points to OPay Credit Score.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {showQuiz ? (
                    <form onSubmit={handleQuizSubmit} className="space-y-4 border-t border-slate-100 pt-4">
                      <h4 className="font-bold text-xs text-on-surface uppercase tracking-wider mb-2">3MTT Course Quiz</h4>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-on-surface">When is the best time to apply crop drainage checks in Kaduna?</p>
                        <div className="space-y-1">
                          <label className="flex items-center gap-2 text-xs text-on-surface-variant cursor-pointer">
                            <input required type="radio" name="q1" className="text-primary focus:ring-primary/20" />
                            Before heavy rainfall begins
                          </label>
                          <label className="flex items-center gap-2 text-xs text-on-surface-variant cursor-pointer">
                            <input type="radio" name="q1" className="text-primary focus:ring-primary/20" />
                            Immediately after harvest
                          </label>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-primary text-on-primary py-2.5 rounded-xl font-bold text-xs hover:bg-primary/95 transition-all shadow cursor-pointer"
                      >
                        Submit Quiz Answers
                      </button>
                    </form>
                  ) : (
                    <button 
                      onClick={() => setShowQuiz(true)}
                      className="w-full bg-secondary-container text-on-secondary-container py-3 rounded-xl font-bold text-xs hover:bg-secondary-container/90 transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">quiz</span>
                      Take Quiz Assessment
                    </button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-outline mx-auto">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h4 className="font-bold text-sm text-on-surface">No active course selected</h4>
              <p className="text-xs text-outline max-w-xs mx-auto">
                Select one of your enrolled courses from the list to start watching video lessons and take tests.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
