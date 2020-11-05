import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Axios from 'axios';
import Modal from 'react-native-modal';
import HTMLView from 'react-native-htmlview';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {jobs} from '../style';
import {JobItem, SearchBar} from '../components';

const Jobs = (props) => {
  const selectedProgLang = props.route.params.selectedLanguage;
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const [forModalJobList, setForModalJobList] = useState([]);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedProgLang.toLowerCase()}`,
    );

    setIsLoading(false);
    setData(response.data);
    setDisplayData(response.data);
  };

  const filterJobs = () => {
    const filteredJobList = data.filter((item) => {
      const searchValue = text.toUpperCase();
      const jobTitle = item.title.toUpperCase();

      return jobTitle.indexOf(searchValue) > -1;
    });
    setDisplayData(filteredJobList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [text]);

  function onJobSelect(job) {
    setModalFlag(true);
    setSelectedJob(job);
  }

  const renderJobs = ({item}) => (
    <JobItem job={item} onSelect={() => onJobSelect(item)} trash={false} />
  );

  const onJobSave = async () => {
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);

    savedJobList.findIndex((a) => a.id == selectedJob.id) !== -1
      ? null
      : (savedJobList = [...savedJobList, selectedJob]);
    setForModalJobList(savedJobList);

    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(savedJobList));
  };

  // ------------------BODY---------------------
  return (
    <SafeAreaView style={jobs.safeArea}>
      <View style={{flex: 1}}>
        <Text style={jobs.title}>Jobs for {selectedProgLang}</Text>
        <SearchBar place="Search a job..." changeText={(x) => setText(x)} />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#FFF"
            style={{marginTop: 300}}
          />
        ) : null}

        <FlatList
          keyExtractor={(_, index) => index}
          data={displayData}
          renderItem={renderJobs}
        />
        <TouchableOpacity
          style={jobs.gotoFavButton}
          onPress={() => props.navigation.navigate('SavedJobsPage')}>
          <Text style={jobs.gotoFavButtonText}>Go to Favourites</Text>
        </TouchableOpacity>
        {/* ---------MODAL----------- */}
        <Modal
          isVisible={modalFlag}
          onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalContainer}>
            <Text style={jobs.modalTitle}>{selectedJob.title}</Text>
            <Text style={jobs.modalSubTitle}>{selectedJob.company}</Text>
            <Text style={jobs.modalSubTitle}>{selectedJob.location}</Text>
            <ScrollView style={jobs.modalScroll}>
              <HTMLView value={selectedJob.description} />
            </ScrollView>

            {forModalJobList.findIndex((a) => a.id == selectedJob.id) !== -1 ? (
              <TouchableOpacity
                style={jobs.saveButton}
                onPress={() => setModalFlag(false)}>
                <Text style={jobs.saveButtonText}>Close</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={jobs.saveButton} onPress={onJobSave}>
                <Text style={jobs.saveButtonText}>Add to Favourites</Text>
              </TouchableOpacity>
            )}
          </View>
        </Modal>
        {/* ---------------MODAL------------- */}
      </View>
    </SafeAreaView>
  );
};

export {Jobs};

// company: "SPS Commerce, Inc"
// company_logo: null
// company_url: "https://www.click2apply.net/BXRGn2F6w5GacyXQI1l1j"
// created_at: "Wed Nov 04 15:37:11 UTC 2020"
// description: "<p>Overview↵SPS Commerce is seeking a Software Engineer to join our systems automation team. As part of this team you'll work collaboratively with your peers to build technical solutions allowing seamless connections between our customers and their supply chain partners.↵Why join SPS?↵As the largest Minnesota SaaS company, we are a leader in our field providing disruptive and innovative solutions within the Retail industry. We have celebrated 78 consecutive quarters of success and we dominate the field. We believe in investing in growth - whether that be in our products, your professional trajectory or in our communities. When you join SPS, you join a winning team and have an opportunity to work alongside exceptional colleagues solving some of the most complex problems facing the evolving retail landscape.↵Does this sound like you?</p>↵<ul>↵<li>You enjoy discussing approaches to maximize value partnering closely with other technologists and stakeholders.</li>↵<li>You believe cooperation and compassion are the key to strong team cohesion.</li>↵<li>Collaboration and communication come naturally to you.</li>↵<li>You define success as being able to contribute to the goals of the team.↵The day-to-day↵The Software Engineer will design, develop, document, test, deploy, and debug new and existing software. The will create, implement, integrate, and maintain software and system components that deliver value to our customers.</li>↵<li>Work collaboratively with team to design, develop, document test and debug new and existing software</li>↵<li>Write quality code and tests that are maintainable, accurate, well tested, and following best practices.</li>↵<li>Plan how the code will be monitored and diagnosed to minimize outages.</li>↵<li>Build services and components upon the latest frameworks, platforms and service providers. Monitor dashboards and respond to alerts and keep services running smoothly.</li>↵<li>Partner with experts in specialized areas like usability, cloud automation, and service reliability in a technically complex environment.</li>↵<li>Estimate work and timelines with reasonable accuracy and articulate reasoning behind estimates.</li>↵<li>Reduce complexity of work through automation and scaling solutions.</li>↵<li>Monitor and help maintain health and availability of systems, apps, and related infrastructure</li>↵<li>Participate in peer reviews and pair programming, and mentor Associates and new hires.↵What is required?</li>↵<li>A minimum of 2 years of related experience with a Bachelor's degree or equivalent work experience with no Bachelor's degree.</li>↵<li>Experience with Agile, JavaScript, HTML, CSS, C#, Java, or Node, Database, Cloud technologies</li>↵<li>Proven experience capable of writing quality code and tests that are maintainable, accurate, well tested, and following best practices.</li>↵<li>Hands on experience with software development practices and can develop applications that are diverse in scope where good judgement and problem-solving skills are required</li>↵<li>Experience in modern frameworks such as React and Angular or a programming language like Python or Java or Go.</li>↵<li>Strong communication skills to proactively communicate status and risks within their team↵Technologies you can expect to encounter in this role</li>↵<li>Java/Kotlin</li>↵<li>Unit and integration testing</li>↵<li>Github and CICD tools and technologies</li>↵<li>Web application development using Javascript and React framework</li>↵<li>PHP</li>↵<li>AWS</li>↵</ul>↵<p>Apply Here: <a href="https://www.click2apply.net/BXRGn2F6w5GacyXQI1l1j">https://www.click2apply.net/BXRGn2F6w5GacyXQI1l1j</a></p>↵<p>PI125669739</p>↵"
// how_to_apply: "<p>Apply Online: <a href="https://www.click2apply.net/BXRGn2F6w5GacyXQI1l1j">https://www.click2apply.net/BXRGn2F6w5GacyXQI1l1j</a></p>↵"
// id: "ae4a1fc2-33bd-4df9-a99d-1555ea716484"
// location: "Minneapolis, MN, 55402"
// title: "Software Engineer"
// type: "Full Time"
// url: "https://jobs.github.com/positions/ae4a1fc2-33bd-4df9-a99d-1555ea716484"

// For HTML View
// https://github.com/jsdf/react-native-htmlview
