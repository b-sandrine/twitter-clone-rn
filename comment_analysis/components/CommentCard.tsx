import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Avatar from './Avatar';

import { Modal } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 for icons

export default function CommentCard({ comment, isAnalyticView }: { comment: any; isAnalyticView: boolean }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      {/* Left Section: Avatar, User Info, and Comment */}
      <View style={styles.leftSection}>
        <Avatar uri={comment.user.avatar} />
        <View style={styles.userContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {comment.user.name}{' '}
              {comment.user.verified && (
                <Image
                  source={require('../assets/images/verified.png')} // Path to the verified badge image
                  style={styles.verifiedBadge}
                />
              )}
              {comment.sentiment === 'positive' && '🟩'}
              {comment.sentiment === 'neutral' && '🟨'}
              {comment.sentiment === 'negative' && '🟥'}
            </Text>
            {/* More Information Icon */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.moreInfoIcon}>ℹ️</Text>
            </TouchableOpacity>
          </View>

          {/* Comment Text */}
          <Text style={styles.commentText}>{comment.text}</Text>

          {/* Reply Section */}
          <View style={styles.replyContainer}>
            <Text style={styles.replyText}>Reply</Text>
            <Text style={styles.viewRepliesText}>View {comment.replies} more replies</Text>
          </View>
        </View>
      </View>

      {/* Right Section: Likes */}
      <View style={styles.likesContainer}>
        <Text style={styles.heart}>♡</Text>
        <Text style={styles.likesText}>{comment.likes}</Text>
      </View>

      {/* Absolute Modal for User Profile */}
      {/* {modalVisible && (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.flexContainer}>
              <Avatar uri={comment.user.avatar} />
              <Text style={styles.modalUserName}>{comment.user.name}</Text>
              {comment.user.verified && (
                <Image
                  source={require('../assets/images/verified.png')} // Path to the verified badge image
                  style={styles.verifiedBadge}
                />
              )}
            </View>
            <View style={styles.container}>
              <Icon name="pin" size={24} color="red" style={styles.modalUserHandle}/>
              <Text style={styles.modalUserName}>Engagement: {comment.user.profile.engagement}</Text>
            </View>
            <View style={styles.container}>
              <Icon name="thumbs-up" size={16} color="#007BFF"  style={styles.modalUserHandle}/>
              <Text style={styles.modalUserName}>Topic insights:
                <View style={styles.container}>
                  -
                  <Icon name="sack-dollar" size={40} color="#007BFF"  />
                  <Text style={styles.modalUserName}>  {comment.user.profile.bio} </Text>
                </View>
              </Text>

            </View>
            <View style={styles.container}>
              <Icon name="thumbs-up" size={16} color="#007BFF"  style={styles.modalUserHandle}/>
              <Text style={styles.modalUserName}>Misinformation:
                <View style={styles.container}>
                  <Text style={styles.modalUserName}>- {comment.user.profile.flags} flags | Fact-Checking contribution</Text>
                </View>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )} */}



      {modalVisible && (
        <Modal
          visible={modalVisible}
          transparent={true} // Makes the background transparent
          animationType="fade" // Optional: Add animation
          onRequestClose={() => setModalVisible(false)} // Handle back button press on Android
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <View style={styles.flexContainer}>
                  <Avatar uri={comment.user.avatar} />
                  <Text style={styles.modalUserName}>{comment.user.name}</Text>
                  {comment.user.verified && (
                    <Image
                      source={require('../assets/images/verified.png')}
                      style={styles.verifiedBadge}
                    />
                  )}
                </View>
                <View style={styles.container}>
                  <Icon name="pin" size={24} color="red" style={styles.modalUserHandle} />
                  <Text style={styles.modalUserName}>Engagement: {comment.user.profile.engagement}</Text>
                </View>
                <View style={styles.container}>
                  <Icon name="thumbs-up" size={16} color="#007BFF" style={styles.modalUserHandle} />
                  <Text style={styles.modalUserName}>Topic insights:
                    <View style={styles.container}>
                      <Icon name="sack-dollar" size={40} color="#007BFF" />
                      <Text style={styles.modalUserName}>
                        {comment.user.profile.bio}
                      </Text>
                    </View>
                  </Text>
                </View>
                <View style={styles.container}>
                  <Icon name="thumbs-up" size={16} color="#007BFF" style={styles.modalUserHandle} />
                  <Text style={styles.modalUserName}>
                    Misinformation:
                    <View style={styles.container}>
                      <Text style={styles.modalUserName}>
                        - {comment.user.profile.flags} flags | Fact-Checking contribution
                      </Text>
                    </View>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    zIndex: 1000
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative', // Ensure the modal is positioned relative to the card
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
  },
  userContainer: {
    marginLeft: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    marginLeft: 4,
    marginTop: 8,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  replyContainer: {
    marginTop: 8,
    paddingTop: 8,
  },
  replyText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  viewRepliesText: {
    fontSize: 12,
    color: 'gray',
  },
  likesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    fontSize: 16,
    color: 'black',
  },
  likesText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  moreInfoIcon: {
    fontSize: 16,
    color: '#007BFF',
    marginLeft: 8,
  },

  modalContent: {
    position: 'absolute',
    top: '40%',
    left: '18%',
    width: '80%',
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: 'black',
    color: 'white',
    transform: [{ translateX: -25 }], // Center the modal horizontally
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    zIndex: 1000
  },
  modalUserName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
    color: 'white',
    marginLeft: 10,
    zIndex: 1000
  },
  modalUserHandle: {
    marginTop: 8,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  }
});