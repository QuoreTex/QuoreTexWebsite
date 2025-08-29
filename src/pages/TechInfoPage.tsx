import React from 'react';
import { useParams } from 'react-router-dom';

const techInfo: Record<string, { title: string; description: string }> = {
  ai: {
    title: 'AI',
    description: 'Artificial Intelligence (AI) enables machines to learn, reason, and solve problems, powering smart solutions across industries.'
  },
  aws: {
    title: 'AWS',
    description: 'Amazon Web Services (AWS) is a leading cloud platform offering scalable computing, storage, and services for modern applications.'
  },
  java: {
    title: 'Java',
    description: 'Java is a robust, object-oriented programming language widely used for building enterprise-scale applications.'
  },
  ml: {
    title: 'ML',
    description: 'Machine Learning (ML) is a subset of AI focused on building systems that learn from data and improve over time.'
  },
  python: {
    title: 'Python',
    description: 'Python is a versatile, high-level programming language known for its simplicity and wide range of applications.'
  },
  'reactjs': {
    title: 'React JS',
    description: 'React JS is a popular JavaScript library for building fast, interactive user interfaces for web applications.'
  },
  'react-native': {
    title: 'React Native',
    description: 'React Native enables cross-platform mobile app development using JavaScript and React.'
  },
  'spring-boot': {
    title: 'Spring Boot',
    description: 'Spring Boot is a Java-based framework for building stand-alone, production-grade Spring applications.'
  },
  'low-code': {
    title: 'Low-code',
    description: 'Low-code platforms accelerate development by enabling rapid application creation with minimal coding.'
  },
  outsystem: {
    title: 'Outsystem',
    description: 'Outsystems is a leading low-code platform for building enterprise-grade applications quickly and efficiently.'
  },
  retool: {
    title: 'Retool',
    description: 'Retool is a low-code platform for building custom internal tools with a drag-and-drop interface.'
  },
};

const TechInfoPage: React.FC = () => {
  const { techName } = useParams<{ techName: string }>();
  const info = techInfo[techName?.toLowerCase() || ''];

  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full text-center">
          <h1 className="text-3xl font-bold mb-4">Technology Not Found</h1>
          <p className="text-gray-700">Sorry, we couldn't find information for this technology.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full text-center">
        <h1 className={`text-4xl sm:text-5xl font-bold mb-6 text-[#334D95]`}>{info.title}</h1>
        <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto">{info.description}</p>
      </div>
    </div>
  );
};

export default TechInfoPage;
